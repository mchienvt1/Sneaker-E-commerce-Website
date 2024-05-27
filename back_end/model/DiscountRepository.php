<?php
class DiscountRepository {
    public $error;
    function getBySearch($search) {
        $cond = "productID='$search'";
        $products = $this->fetch($cond);
        return $products;
    }
    function fetch($cond = null) {
        global $conn;
        $productRepository = new ProductRepository();
        $sql = "SELECT * FROM discount";
        if ($cond) {
            $sql .= " WHERE $cond";
        }
        $result = $conn->query($sql);

        $products = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $product = $productRepository->getBySearch($row['productID']);
                $products[] = $product[0];
            }
        }
        return $products;
    }   

    function save($productId){
        global $conn; 
        $sql = "SELECT * FROM product WHERE id=$productId";
        if($conn->query($sql)->num_rows > 0){
           $newsql = "SELECT * FROM discount WHERE productID=$productId";
           if($conn->query($newsql)->num_rows > 0){
            return false; 
           }
           
           $newsql = "INSERT INTO discount (productID) VALUES ($productId)";
           if($conn->query($newsql)){
             return true; 
           }
           return false;
        }
        else{
            return false; 
        }
    }

    function delete($productId){
        global $conn; 
        $sql = "DELETE FROM discount WHERE productID=$productId";
        if($conn->query($sql)){
            return true; 
        }
        return false;
    }
}
?>