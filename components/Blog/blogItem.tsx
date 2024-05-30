import Counter from './counter';

const BlogItem = ({ blog }) => {
  const percentage = parseInt(blog.tags[0].replace('%', '').replace('+', ''), 10);

  return (
    <div className="blog-item">
      <img src={blog.image} alt={blog.title} />
      <h2>{blog.title}</h2>
      <p>{blog.paragraph}</p>
      <div className="tags">
        <Counter endValue={percentage} duration={2000} /> {/* 2 seconds duration */}
      </div>
      <div className="publish-date">Date: {blog.publishDate}</div>
    </div>
  );
};

export default BlogItem;
