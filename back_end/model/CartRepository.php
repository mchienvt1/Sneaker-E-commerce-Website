<?php

class CartRepository
{
    public $error;

    function getBySearch($search)
    {
        $cond = "a_id LIKE '%$search%'";
        $products = $this->fetch($cond);
        return $products;
    }
    function getAll()
    {
        return $this->fetch();
    }

    function fetch($cond = null)
    {
        global $conn;
        $sql = "SELECT * FROM cart";
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

    function save($data)
    {
        global $conn;
        $sl = $data->sl;
        $a_id = $data->a_id;
        $p_id = $data->p_id;
        $size = $data->size;
        $status = "Wating"; 
    
        $sql = "INSERT INTO cart(sl,a_id,p_id,size,status) VALUES('$sl','$a_id','$p_id','$size','$status')";
        if ($conn->query($sql)) {

            return true;
        }
        $this->error = "Error: $sql <br>" . $conn->error;
        return false;
    }
    public function delete($p_id, $a_id, $size)
    {
        global $conn;
        $sql = "DELETE FROM cart WHERE p_id='$p_id' And a_id='$a_id' And size='$size'";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" . $conn->error;
        return false;
    }
    public function productExistsInCart($p_id, $a_id, $size)
    {
        global $conn;
        $sql = "SELECT * FROM cart WHERE a_id = '$a_id' AND p_id = '$p_id' AND size='$size'";
        $result = $conn->query($sql);
        return $result && $result->num_rows > 0;
    }

    public function updateProductQuantity($a_id, $p_id, $additionalQuantity, $size)
    {
        global $conn;
        $sql = "UPDATE cart SET sl = sl + $additionalQuantity WHERE a_id = '$a_id' AND p_id = '$p_id' AND size = '$size'";
        return $conn->query($sql);
    }
    function decreaseProductQuantity($a_id, $p_id, $size)
    {
        global $conn;
        $sql = "SELECT sl FROM cart WHERE a_id='$a_id' AND p_id='$p_id' AND size='$size'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $currentQuantity = $row["sl"];
            if ($currentQuantity > 1) {
                // Giảm số lượng sản phẩm
                $newQuantity = $currentQuantity - 1;
                $updateSql = "UPDATE cart SET sl='$newQuantity' WHERE a_id='$a_id' AND p_id='$p_id' AND size='$size'";
                if ($conn->query($updateSql)) {
                    return true;
                }
                $this->error = "Error: $updateSql <br>" . $conn->error;
                return false;
            } else if ($currentQuantity == 1) {
                // Số lượng = 1, xóa sản phẩm
                return $this->delete($p_id, $a_id, $size);
            }
        }
        $this->error = "Sản phẩm không tồn tại trong giỏ hàng";
        return false;
    }
    function update($data){
        global $conn;
        $id = $data->id;
        $sl = $data->sl;
        $a_id = $data->a_id;
        $p_id = $data->p_id;
        $size = $data->size;
        $status = $data->status; 
        $updateSql = "UPDATE cart SET sl='$sl', a_id='$a_id', p_id='$p_id', size='$size', status='$status' WHERE id=$id";
        if($conn->query($updateSql)){
            return true;
        }
        else{
            $this->error = "Error: $updateSql <br>" . $conn->error;
            return false;
        }

    }
}