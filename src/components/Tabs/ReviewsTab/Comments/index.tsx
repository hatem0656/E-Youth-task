import "./index.scss";
import userImage from "../../../../assets/user.png";
import replyIcon from "../../../../assets/reply-icon.svg";
const Comments = () => {
  return (
    <div className="comments-container">
      {Array.from({ length: 3 }, (_, index) => (
        <div key={"comment" + index} className="comment">
          <img className="user-image" src={userImage} alt="user" />
          <div className="comment-content">
            <h2>Laura Hipster</h2>
            <span className="date">October 03, 2022</span>
            <p>
              Quisque nec non amet quis. Varius tellus justo odio parturient
              mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend
              luctus ut. Id sed faucibus bibendum augue id cras purus. At eget
              euismod cursus non. Molestie dignissim sed volutpat feugiat vel.
            </p>
            <div className="reply">
              <img src={replyIcon} alt="reply-icon" />
              Reply
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
