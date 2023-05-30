import React, { useEffect } from "react";
import { connect } from "react-redux";

// Components
import PageTitle from "../../Components/PageTitle";

// Actions
import { getCountUser, getUsers } from "../../redux/actions/userActions";
import { getCountNews, loadNews } from "../../redux/actions/newsActions";

const Dashboard = (props) => {
  const init = () => {
    props.getCountUser();
    props.getCountNews();
    props.getUsers(`limit=6`);
    props.loadNews(`limit=6`);
  };
  const clear = () => {};
  // UseEffect's

  useEffect(() => {
    init();
    return () => {
      clear();
    };
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <PageTitle name="Хянах самбар" />
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="count-box bg-info">
                  <div className="inner">
                    <h3></h3>
                    <p>Нийт санал хүсэлт</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-shopping-cart"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="count-box tile-green">
                  <div className="inner">
                    <h3>{props.userTotal}</h3>
                    <p>Нийт Хэрэглэгчид</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-users"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="count-box tile-aqua">
                  <div className="inner">
                    <h3>{props.newsTotal}</h3>
                    <p>Нийт контент</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-newspaper"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="count-box tile-aqua">
                  <div className="inner">
                    <h3>{}</h3>
                    <p>Нийт үйлчилгээ</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-book"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="card card-custom">
                  <div className="card-header custom-card-header">
                    <h3 className="card-title">Сүүлд нэмэгдсэн захиалгууд</h3>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th style={{ width: 10 }}>#</th>
                          <th>Захиалга</th>
                          <th>Огноо</th>
                          <th style={{ width: 40 }}>Линк</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {props.orders &&
                          props.orders.map((order, index) => (
                            <tr>
                              <td>{index + 1}.</td>
                              <td>{order.product.name}</td>
                              <td>{order.createAt}</td>
                              <td>
                                <a href={`/orders/view/${order._id}`}> Линк </a>
                              </td>
                            </tr>
                          ))} */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="card card-custom">
                  <div className="card-header custom-card-header">
                    <h3 className="card-title">Сүүлд нэмэгдсэн хэрэглэгчид</h3>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th style={{ width: 10 }}>#</th>
                          <th>Нэр</th>
                          <th>Огноо</th>
                          <th style={{ width: 40 }}>Линк</th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.users &&
                          props.users.map((user, index) => (
                            <tr>
                              <td>{index + 1}.</td>
                              <td>{user.firstname}</td>
                              <td>{user.createAt}</td>
                              <td>
                                <a href={`/users/view/${user._id}`}> Линк </a>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="card card-custom">
                  <div className="card-header custom-card-header">
                    <h3 className="card-title">Сүүлд нэмэгдсэн контент</h3>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th style={{ width: 10 }}>#</th>
                          <th>Нэр</th>
                          <th>Огноо</th>
                          <th style={{ width: 40 }}>Линк</th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.news &&
                          props.news.map((el, index) => (
                            <tr>
                              <td>{index + 1}.</td>
                              <td>{el.name}</td>
                              <td>{el.createAt}</td>
                              <td>
                                <a href={`/news/view/${el._id}`}> Линк </a>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="card card-custom">
                  <div className="card-header custom-card-header">
                    <h3 className="card-title">Сүүлд нэмэгдсэн контент</h3>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th style={{ width: 10 }}>#</th>
                          <th>Нэр</th>
                          <th>Огноо</th>
                          <th style={{ width: 40 }}>Линк</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {props.courses &&
                          props.courses.map((course, index) => (
                            <tr>
                              <td>{index + 1}.</td>
                              <td>{course.name}</td>
                              <td>{course.createAt}</td>
                              <td>
                                <a href={`/courses/view/${course._id}`}>Линк</a>
                                
                              </td>
                            </tr>
                          ))} */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    orderTotal: state.orderReducer.totalCount,
    userTotal: state.userReducer.totalCount,
    newsTotal: state.newsReducer.totalCount,
    courseTotal: state.courseReducer.totalCount,
    orders: state.orderReducer.orders,
    users: state.userReducer.users,
    news: state.newsReducer.allNews,
    courses: state.courseReducer.courses,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    getCountUser: () => dispatch(getCountUser()),

    getCountNews: () => dispatch(getCountNews()),
    loadNews: (query) => dispatch(loadNews(query)),
    getUsers: (query) => dispatch(getUsers(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Dashboard);
