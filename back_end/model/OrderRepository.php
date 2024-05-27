<?php
class OrderRepository
{
    public $error;

    public function getBySearch($search)
    {
        $cond = "username = '$search'";
        $users = $this->fetch($cond);
        return $users;
    }
    public function getAll()
    {
        return $this->fetch();
    }

    public function fetch($cond = null)
    {
        global $conn;
        $sql = "SELECT * FROM orders";
        if ($cond) {
            $sql .= " WHERE $cond";
        }
        $result = $conn->query($sql);
        $users = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $user = $row;
                $users[] = $user;
            }
        }
        return $users;
    }
    public function find($id)
    {
        $cond = "id = $id";
        $students = $this->fetch($cond);
        $student = current($students); //lấy student tại vị trí con trỏ
        return $student;
    }

    public function update($student)
    {
        global $conn;
        $id = $student->id;
        $status = $student->status;
      
       
        $sql = "UPDATE orders SET status='$status' WHERE id = $id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" . $conn->error;
        return false;

    }

    public function delete($id)
    {
        global $conn;
        $sql = "DELETE FROM orders WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" . $conn->error;
        return false;

    }
    function save($data) {
        global $conn;
        $a_id= $data->a_id;
        $total= $data->total;
        $billing_address= $data->billing_address;
        $status="Đang tiếp nhận";
        $date=date('d/m/Y');
        $note= $data->note;



        if( $total!="" and  $billing_address!="" and $a_id!="")
        {
            $sql = "INSERT INTO orders(a_id,total,billing_address,date,status,note) VALUES('$a_id','$total','$billing_address','$date','$status','$note')";
            if ($conn->query($sql)) {
                return true;    
            }
            $this->error = "Error: $sql <br>" .$conn->error ;
            return false;
        }
            return false;
        }
}