<?php 
class ProductRepository {
    public $error;

    function getByFilter($filter) {
        $cond = "ptitle LIKE '%$filter%'";
        $products = $this->fetch($cond);
        return $products;
    }

    function getBySearch($search) {
        $cond = "id='$search'";
        $products = $this->fetch($cond);
        return $products;
    }

    function getAll() {
        return $this->fetch();
    }

    function fetch($cond = null) {
        global $conn;
        $sql = "SELECT * FROM product";
        
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

    function save($data) {
        global $conn;
        $product= $data->product;
        $sizes= $data->sizes;
        $subImages= $data->subImages;
        $description= $data->description;
       
        if($product!="")
        {
            $sql = "INSERT INTO product(ptitle,pimg,pprice,pgender,pkind) VALUES('$product->ptitle','$product->pimg',$product->pprice,'$product->pgender','$product->pkind')";
            if ($conn->query($sql)) {
                $productID = $conn->insert_id;
                foreach($sizes as $size){
                    $sql = "INSERT INTO size(productID, soluong, size) VALUES($productID, $size->soluong, $size->size)";
                    if(!$conn->query($sql)){
                        return false;
                    }
                }
                foreach($subImages as $subImage){
                    $sql = "INSERT INTO subimage(productID, img) VALUES('$productID', '$subImage')";
                    if(!$conn->query($sql)){
                        return false;
                    }
                }
                $sql = "INSERT INTO description (productID, content) VALUES ('$productID', '$description')";
                if(!$conn->query($sql)){
                    return false;
                }
                return true;
            }
            $this->error = "Error: $sql <br>" .$conn->error ;
            return false;
        }else{
            return false;
        }
    }
    function delete($id) {
        global $conn;
        $sql = "DELETE FROM product WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    function update($data) {
        global $conn;
        $id = $data->id;
        $ptitle= $data->ptitle;
        $pimg= $data->pimg;
        $pprice= $data->pprice;
        $pgender = $data->pgender;
        $pkind= $data->pkind;
        $description = $data->description; 
        $sql = "UPDATE product SET ptitle=\"$ptitle\", pimg='$pimg', pprice='$pprice', pgender='$pgender', pkind='$pkind' WHERE id=$id";
        if ($conn->query($sql)) {
            if($description != ""){
                $sql = "UPDATE description SET content='$description' WHERE productID = $id";
                if ($conn->query($sql)) {
                    return true;
                }
            }
            return true;
        }

        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;
    }
}
?>