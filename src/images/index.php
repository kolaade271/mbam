<?php
// Replace with your actual database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "wulor";

// Function to connect to the database
function connectToDatabase() {
    global $servername, $username, $password, $dbname;
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

// Function to get unsent messages from the database
function getUnsentMessages() {
    $conn = connectToDatabase();
    $sql = "SELECT * FROM messages WHERE `is_sent` = 0";
    $result = $conn->query($sql);
    $messages = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $messages[] = $row;
        }
    }
    $conn->close();
    return $messages;
}


function sendMsg($to, $message, $url, $apikey) {
    // Set the request headers

         $headers = array(
        'accept: application/json',
        'x-maytapi-key: '.$apikey,
        'Content-Type: application/json'
    );


    // Set the request data
    $data = array(
        "to_number" => $to,
        "type" => "text",
        "message" => $message
    );

    // Initialize cURL session
    $ch = curl_init();

    // Set cURL options
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Execute the cURL request
    $response = curl_exec($ch);

    // Check for cURL errors
    if (curl_errno($ch)) {
        echo 'cURL error: ' . curl_error($ch);
    }

    // Close cURL session
    curl_close($ch);

    // Process the response
    if ($response) {
        $decoded_response = json_decode($response, true);
        return $decoded_response;
    } else {
        return 'No response received.';
    }
}




// Function to respond to messages and update the "is_sent" flag
function respondToMessages() {
    $messages = getUnsentMessages();
    $conn = connectToDatabase();

    foreach ($messages as $message) {
        $messageId = $message['id'];
        $sender = $message['SENDER'];
        $recipient = $message['RECIPIENT'];
        $originalMessage = $message['MESSAGE'];
        $responseMessage = ""; // Initialize an empty string for the response
        $messages = $message['MESSAGE'];

        // You can add your logic here to generate the response based on the original message
        if ($sender == "Mark" && $recipient == "Henry") {
            $responseMessage = "This is a response from $recipient to $sender.";
        } elseif ($sender == "Henry" && $recipient != "Henry") {
            $responseMessage = "This is a response from $recipient to $sender.";
        }

        // Generate random delay in seconds (between 1 to 3 seconds)
        $delaySeconds = rand(1, 60);
        sleep($delaySeconds);

        if ($delaySeconds < 10 && strlen($messages) >= 25) {
           $delayMinutes = rand(1, 2) * 60;
        sleep($delayMinutes);
        }

          // // Generate random delay in minutes (between 1 to 3 minutes)
        

        if ($sender == "Mark") {

        $url = "https://api.maytapi.com/api/6891f618-8bf1-4371-b70f-cc0d1f8833b1/30499/sendMessage";
            $to = "2348052010648";
            $apikey = "071994ff-3896-4ee2-8e26-2ff7068aea36";
           $haa =  sendMsg($to, $messages, $url, $apikey);
           print_r($haa);
             echo "Response: $responseMessage\n<br/>";
        } else{
        $url = "https://api.maytapi.com/api/110abf15-feee-495d-89e3-13b0f1af2cac/30485/sendMessage";
            $to = "15208151075";
            $apikey = "3ca5b405-59e2-4ad8-aa87-6d385c58b795";
            sendMsg($to, $messages, $url, $apikey);
             echo "Response: $responseMessage\n<br/>";
        }

        // Display the response message (you can store it in a variable if needed)
       

        // Mark the original message as sent by updating the "is_sent" flag
        $updateSql = "UPDATE messages SET `is_sent` = 1 WHERE id = $messageId";
        if ($conn->query($updateSql) === TRUE) {
            echo "Message ID $messageId marked as sent.\n";
        } else {
            echo "Error updating message ID $messageId: " . $conn->error;
        }
    }

    $conn->close();
}
// Usage example: Respond to messages and mark them as sent
respondToMessages();


?>
