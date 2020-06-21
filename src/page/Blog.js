import React, { Component } from "react";
import { DiscussionEmbed, CommentCount, CommentEmbed } from 'disqus-react';

class Blog extends Component {
  render() {
    return (
      <div>
        <h2>Blog</h2>
        <p>Halaman blog</p>
        <DiscussionEmbed
            shortname='Deni Hidayat'
            config={
              {
                url: "https://denihida1216.github.io/web/#/",
                identifier: "https://denihida1216.github.io/web/#/blog",
                title: "Blog",
                language: 'en'
            }
            }
        />
        <CommentCount
    shortname='example'
    config={
        {
          url: "https://denihida1216.github.io/web/#/",
          identifier: "https://denihida1216.github.io/web/#/blog",
          title: "Blog"
        }
    }
>
    {/* Placeholder Text */}
    Comments
</CommentCount>
<CommentEmbed
    commentId={"https://denihida1216.github.io/web/#/blog"}
    showMedia={true}
    showParentComment={true}
    width={420}
    height={320}
/>
      </div>
    );
  }
}
 
export default Blog;