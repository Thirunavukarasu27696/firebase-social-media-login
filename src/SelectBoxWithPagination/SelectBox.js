import React from "react";
// import "antd/dist/antd.css";
// import { Select, Icon, Divider, Pagination, Button } from "antd";
// import faker from "faker";

// const Option = Select.Option;
// let names = [];
// const count = 100;
// const pageSize = 10;
// for (let i = 0; i < count; i++) {
//     names.push(faker.name.firstName());
// }

// const getNames = pageNumber => {
//     let toSendNames = [];
//     for (let i = (pageNumber - 1) * pageSize; i < pageNumber * pageSize; i++) {
//         toSendNames.push(names[i]);
//     }
//     return toSendNames;
// };

class Test extends React.Component {
    state = {
        isOpen: false,
        currentPage: 1
    };
    onChageItem = (name, item) => {
        console.log(name, item);

    }
    render = () => {
        return (
            <div>
                hi from selectbox
                {/* antd version  "antd": "^4.13.0", */}
                {/*faker for sample user object "faker": "^5.4.0", */}

                {/* <Select
                    placeholder="Select any name..."
                    style={{ width: 250 }}
                    onFocus={() => {
                        console.log("On focus");
                        this.setState({ isOpen: true });
                    }}
                    onChange={(name, item) => this.onChageItem(name, item)}
                    open={this.state.isOpen}
                    dropdownRender={menu => (
                        <div>
                            {menu}
                            <Divider style={{ margin: "4px 0" }} />
                            <div style={{ padding: "8px", textAlign: "center" }}>
                                <Pagination
                                    simple
                                    current={this.state.currentPage}
                                    total={count}
                                    onChange={pageIndex => {
                                        this.setState({
                                            currentPage: pageIndex
                                        });
                                    }}
                                />
                                <Divider style={{ margin: "4px 0" }} />
                                <Button
                                    type="ghost"
                                    style={{ width: "100%", borderColor: "red" }}
                                    size="small"
                                    onClick={() =>
                                        this.setState({
                                            isOpen: false
                                        })
                                    }
                                >
                                    Close
                </Button>
                            </div>
                        </div>
                    )}
                >
                    {getNames(this.state.currentPage).map((item, ind) => {
                        return <Option value={item} key={ind}>{item}</Option>;
                    })}
                </Select> */}
            </div>
        );
    };
}

export default Test;