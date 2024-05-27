<?php 
class Order {
    public $id;
    public $a_id;
    public $total;
    public $billing_address;
    public $date;
    public $status;
    public $note;

    function __construct($id, $a_id,$total,$billing_address,$date,$status,$note) {
        $this->id= $id;
        $this->a_id = $a_id;
        $this->total = $total;
        $this->billing_address = $billing_address;
        $this->date = $date;
        $this->status = $status;
        $this->note = $note;
       
    }

}

?>