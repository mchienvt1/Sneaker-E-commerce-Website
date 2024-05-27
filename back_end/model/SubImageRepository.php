<?php
class SubImageRepository{
    public $error;

    function getBySearch($search) {
        $cond = "productID='$search'";
        $products = $this->fetch($cond);
        return $products;
    }
    function fetch($cond = null) {
        global $conn;
        $sql = "SELECT * FROM subimage";
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
        $img = $data->img; 
        $sql = "UPDATE subimage SET img='$img' WHERE id = $id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;
    }
    function delete($data){
        global $conn;
        $id = $data->id;
        $sql = "DELETE FROM subimage WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;
    } 
    function save($data){
        global $conn;
        $productID = $data->productID;
        $img = $data->img; 
        $sql = "INSERT INTO subimage (productID, img) VALUES ('$productID', '$img')";
        if($conn->query($sql)){
            return true;
        }
        return false;
    }
}


?>