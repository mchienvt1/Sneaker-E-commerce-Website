<?php
class SizeRepository{
    public $error;

    function getBySearch($search) {
        $cond = "productID='$search'";
        $products = $this->fetch($cond);
        return $products;
    }


    function fetch($cond = null) {
        global $conn;
        $sql = "SELECT * FROM size";
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

    function update($data){
        global $conn; 
        $id = $data -> id; 
        $productID = $data->productID; 
        $soluong = $data->soluong; 
        $size = $data->size; 

        $sql = "UPDATE size SET productID=$productID, soluong=$soluong, size=$size WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;
    }

    function decreaseSizeQuantity($id, $sl){
        global $conn; 
        $sql = "SELECT soluong FROM size WHERE id=$id";
        $result = $conn -> query($sql); 
        if($result->num_rows > 0 ){
            $row = $result->fetch_assoc(); 
            $soluong = $row['soluong'];
            if($soluong >= $sl){
                $soluong = $soluong - $sl; 
                $sql = "UPDATE size SET soluong=$soluong WHERE id=$id";
                
                if($conn->query($sql)){
                    return true; 
                }
                $this->error = "Error: $sql <br>" .$conn->error ;
                return false;
            }
            else{
                $this->error = "Số lượng sản phẩm không đủ";
                return false;
            }
        }
        $this->error = "Sản phẩm không tồn tại";
        return false;
    }

    function addSizeQuantity($id, $sl){
        global $conn; 
        $sql = "UPDATE size SET soluong=soluong+$sl WHERE id=$id";
        return $conn->query($sql); 

    }

    function save($data){
        global $conn; 
        $productID = $data->productID; 
        $soluong = $data->soluong; 
        $size = $data->size; 

        $sql = "INSERT INTO size (productID, soluong, size) VALUES ($productID, $soluong, $size)";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" . $conn->error;
        return false;
    }


    function delete($id){
        global $conn;
        $sql = "DELETE FROM size WHERE id=$id";
        if($conn->query($sql)){
            return true; 
        }
        $this->error = "Error: $sql <br>" . $conn->error;
        return false;
    }

   
}

?>