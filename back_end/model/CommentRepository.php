<?php 
class CommentRepository {
    public $error;

    function getBySearch($search) {
        $cond = "p_id LIKE '%$search%'";
        $comments = $this->fetch($cond);
        return $comments;
    }
    function getAll() {
        return $this->fetch();
    }

    function fetch($cond = null) {
        global $conn;
        $sql = "SELECT * FROM comment";
        if ($cond) {
            $sql .= " WHERE $cond";
        }
        $result = $conn->query($sql);
        $comments = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $comment = $row;
                $comments[] = $comment;
            }
        }
        return $comments;
    }
   
    function save($data) {
        global $conn;
        $a_id= $data->a_id;
        $comment= $data->comment;
        $time= (date('Y-m-d'));
        $p_id= $data->p_id;

        if($comment!="" and $p_id!=""){
            $sql = "INSERT INTO comment(a_id,comment,time,p_id) VALUES('$a_id','$comment','$time','$p_id')";
            if ($conn->query($sql)) {
                return true;
            }
            $this->error = "Error: $sql <br>" .$conn->error ;
            return false;
        }
        return false;
    }
    function delete($id) {
        global $conn;
        $sql = "DELETE FROM comment WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;
    }
}
?>