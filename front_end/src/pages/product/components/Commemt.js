import React, {useEffect, useState} from 'react';
import style from './Comment.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Comment({ product }) {
  const navigate = useNavigate();
  
  const fetchComments = async () => {
    const res = await axios
      .get(`http://localhost/BE/?c=comment&a=list&search=${product.id}`)
    return res.data;
  }
  const [comments, setComments] = useState([]);
  const fetchUser = async (accountID) => {
    const res = await axios
      .get(`http://localhost/BE/?c=user&a=list&search=${accountID}`)
    return res.data[0];
  }

  //fetch comment
  useEffect(() => {
    axios
    .get(`http://localhost/BE/?c=comment&a=list&search=${product.id}`)
    .then((result) => {
      const commentPromises = result.data.map((comment) => {
        return fetchUser(comment.a_id)
          .then((data) => {
            comment['fullname'] = data.fullname;
            return comment;
          });
      });

      Promise.all(commentPromises)
        .then((commentsWithData) => {
          setComments(commentsWithData);
        });
    });
  }, [])

  console.log(comments);

  // console.log(comments, comments.length, users, users.length);
  // console.log(users[0], users.length);

  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn chặn reload trang sau khi submit form
    
    if (localStorage.getItem('role') !== 'user') {
      if(window.confirm('Bạn cần đăng nhập để đánh giá sản phẩm. Bạn có muốn đăng nhập?')){ 
        navigate('/account/login');
      }
    }

    const commentInput = document.getElementById('comment').value;

    if (commentInput.trim() === '') {
      alert('Vui lòng nhập đầy đủ thông tin Họ và tên và Đánh giá.');
      return; // Không thực hiện submit nếu thiếu thông tin
    }
      // Tạo một đối tượng đại diện cho đánh giá mới
    const sendData = {
      a_id: localStorage.getItem('id'),
      p_id : product.id, 
      comment : commentInput
    }
    axios
      .post("http://localhost/BE/?c=comment&a=save", sendData)
      .then((result) => {
        if (result.data) {
          if(window.confirm('Gửi đánh giá thành công. Nhấn đồng ý để load lại trang')){ 
            window.location.reload();
          }
        } else {
          alert('Gửi đánh giá thất bại');
        }
      });
  };
  
  return (
    { product } ?
      <div className={`${style.comment_container}`}>
          <div className={`${style.comment_form} col-4 pt-3 border-right `}>
            <h5>Đánh giá của bạn về sản phẩm này</h5>

            <form className = "px-2" onSubmit={handleSubmit}>
              <div className="mt-3 mb-4">
                <textarea placeholder="Viết đánh giá" className={`${style.custom_input_comment} form-control`} id="comment" rows = "5" />
              </div>
              <div>
              <button type="submit" className={`${style.comment_submit} btn btn-primary`}>Gửi đánh giá</button>
              </div>
            </form>
            
          </div>
          <div className={`${style.comment_list} col-8 pt-3 bg-white`}>
            
            {comments.map((comment, index) => (
              <div className = {style.comment_client_box} key = {comment.id}>
                <span className={style.name_client}>
                  {comment.fullname}
                </span>
                <span>{comment.comment}</span>
              </div>
            ))}
          </div>
      </div>
      :
      <h1>Product is empty</h1>
  );
}