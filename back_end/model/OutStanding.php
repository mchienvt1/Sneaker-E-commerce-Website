<?php 
class OutStanding {
    public $id;
    public $productID;

    function __construct($id, $productID) {
        $this->id= $id;
        $this->productID = $productID;
    }

}