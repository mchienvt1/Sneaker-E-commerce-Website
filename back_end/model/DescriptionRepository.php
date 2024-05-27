<?php
class DescriptionRepository{
    public $error;

    function getBySearch($search) {
        $cond = "productID='$search'";
        $products = $this->fetch($cond);
        return $products;
    }
    function fetch($cond = null) {
        global $conn;
        $sql = "SELECT * FROM description";
        if ($cond) {
            $sql .= " WHERE $cond";
        }
        $result = $conn->query($sql);
        $products = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $product = $row;
                $products[] = $product;
            }
        }
        return $products;
    }   
    function update($data) {
        global $conn;
        $id = $data->id;
        $content = $data->content; 
        $sql = "UPDATE description SET content='$content' WHERE id = $id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;
    }
    function delete($data){
        global $conn;
        $id = $data->id;
        $sql = "DELETE FROM description WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;
    } 
    function save($data){
        global $conn;
        $productID = $data->productID;
        $description = $data->description; 
        $sql = "INSERT INTO description (productID, content) VALUES ('$productID', '$description')";
        if($conn->query($sql)){
            return true;
        }
        return false;
    }


}


?>