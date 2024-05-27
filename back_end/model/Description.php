<?php 
class Description {
    public $id;
    public $productID;
    public $content;

    function __construct($id, $productID,$content) {
        $this->id= $id;
        $this->productID = $productID;
        $this->content = $content;
    }

}