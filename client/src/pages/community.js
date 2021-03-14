import React, { Component } from "react";
import axios from "../config";
import "./styles/community.css";
import { NavigationBar } from "../components/NavigationBar";

import Sidebar from "../components/Sidebar";
export default class Community extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      communities: [],
      currentMessage: [],
      previousMessage: [],
      messages: [],
      currentCommunity: null,
      username: null,
      users: [],
    };
  }

  componentDidMount = async () => {
    const username = await axios.post("/fetchUser", {
      email: localStorage.getItem("email"),
    });

    this.setState({ username: username.data });

    const community = await axios.post("/fetchCommunity", {
      email: localStorage.getItem("email"),
    });
    console.log(community.data);
    this.setState({ communities: community.data });
  };

  createCommunity = async () => {
    const communityName = document.getElementById("create-community").value;
    console.log(communityName);
    document.getElementById("create-community").value = "";
    const communities = [...this.state.communities, communityName];
    this.setState({ communities: communities });

    const create = await axios.post("/createCommunity", {
      email: localStorage.getItem("email"),
      communityname: communityName,
      username: this.state.username,
    });
  };

  sendMessage = async () => {
    const message = document.getElementById("message-input").value;
    document.getElementById("message-input").value = "";
    const currentmessages = [...this.state.currentMessage, message];
    const messages = [...this.state.messages, ...currentmessages];

    this.setState({ messages: messages });
    this.setState({ currentmessages: currentmessages });
    const postmessage = await axios.post("/message", {
      communityname: this.state.currentCommunity,
      message: message,
    });
  };

  community = async (e) => {
    this.setState({ messages: [] });
    this.setState({ currentCommunity: e.target.id });

    const messages = await axios.post("/getmessage", {
      communityname: e.target.id,
    });

    const users = await axios.post("/fetchCommunityUsers", {
      communityname: e.target.id,
    });
    this.setState({ users: [...users.data] });
    // console.log(messages);
    this.setState({ messages: [...messages.data] });
  };

  render() {
    return (
      <div className="community-page">
        <NavigationBar />
        <Sidebar />

        <div className="buttonss">
          <div>
            <input type="text" id="join-community" />
            <button
              onClick={() => {
                this.join();
              }}
            >
              Join Community
            </button>
          </div>
          <div>
            <input type="text" id="create-community" />

            <button
              id="create"
              onClick={() => {
                this.createCommunity();
              }}
            >
              Create a Community
            </button>
          </div>
        </div>
        <div className="chat-window">
          <div className="side-bar">
            <h4>Communities</h4>
            <div className="communities">
              {this.state.communities.map((community) => (
                <div
                  className="community-div"
                  id={community}
                  onClick={(e) => {
                    this.community(e);
                  }}
                >
                  {community}
                  <hr />
                </div>
              ))}
            </div>
            <h4>Users</h4>

            <div className="users">
              {this.state.users.map((user) => (
                <div className="user-div" id={user}>
                  {user}
                  <hr />
                </div>
              ))}
            </div>
          </div>

          <div className="chatss">
            <div className="main-chats">
              {this.state.messages.map((message) => (
                <div className="chat-message" id={message}>
                  {message}
                </div>
              ))}
            </div>

            <div className="input-side">
              <div className="chat-side"></div>
              <div className="chat">
                <div className="message-input">
                  <div id="enter">
                    <h2>Enter Your Message...</h2>
                  </div>
                  <input className="message-box" id="message-input"></input>
                  <button
                    id="send"
                    onClick={() => {
                      this.sendMessage();
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
