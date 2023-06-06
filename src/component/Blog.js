import { blogs } from "./blogs";
export default function Blog() {
  return (
    <div className="blog-container">
      {blogs.map((blog, i) => {
        return (
          <div className="blog-item" key={blog.id}>
            <div className="picture-block" style={{ background: blog.back }}>
            <div className="circle"></div>
              <h3>{blog.name}</h3>
              <img
                src={blog.picture}
                className={i == 2 ? "myPic" : ""}
                alt=""
              />
            </div>
            <div className="times">
                <img
                  src="https://static.tildacdn.com/tild3931-3438-4433-a366-313264656530/chronometer.svg"
                  alt=""
                />
                <p>{blog.play}</p>
                <img
                  src="https://static.tildacdn.com/tild6635-3435-4735-b236-666239643261/clock.svg"
                  alt=""
                />
                <p>{blog.time}</p>
                <img
                  src="https://static.tildacdn.com/tild6531-3031-4564-b938-303861393362/user.svg"
                  alt=""
                />
                <p>{blog.people}</p>
            </div>
            <p>{blog.content}</p>
            <button className="more">Подробнее</button>
            <button className="select">Выбрать</button>
          </div>
        );
      })}
    </div>
  );
}
