"use client";
import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { comments } from "@/libs/comments";
export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwner
          userName="Supatkorn Pundontong"
          studentId="650610812"
          img="/profileImages/251169369_588664405706031_2780271531457327530_n.jpg"
          postStatus="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          likeNum="100"
        />

        {comments.map((com, index) => (
          <Comment
            key={index}
            userImagePath={com.userImagePath}
            username={com.username}
            commentText={com.commentText}
            likeNum={com.likeNum}
            replies={com.replies}
          />
        ))}
      </div>
    </div>
  );
}
