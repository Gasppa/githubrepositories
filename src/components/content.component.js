import React, { Component } from 'react';
import SearchUserComponent from "./search.user.component";
import CustomizedTables from "./table.component"
import axios from 'axios'

export default class Content extends React.Component {

  constructor(props){
    super(props)
 
    this.searchUserRepos = this.searchUserRepos.bind(this)
    this.state = {
      username : '',
      tbData : []
    } 
  }  

  searchUserRepos = (childData) => {
    
      this.setState({username: childData}, async ()=>{

        const user = {
          username: this.state.username
        }        
        
        axios.post('http://localhost:5000/repositories', user)
        .then(res => {
          let data = res.data

          //construir objeto da tabela aqui

          let tableData = []

          for(var i in data) {    

            let row = data[i];   
        
            tableData.push({ 
                "userImg"   : row.owner.avatar_url,
                "login"     : row.owner.login,
                "repoName"  : row.name,
                "repoURL"   : row.html_url,
                "starsCount": row.stargazers_count,
                "forksCount": row.forks_count,
                "watchsCount": row.watchers_count
            });
          }
          
          this.setState({tbData : tableData})
        })
        .catch(err => alert(err))

      })
  } 

  render() {
    return (
      <div>
        <SearchUserComponent onSelectUser={this.searchUserRepos}/>
        <div className="container">
          <CustomizedTables tableData={this.state.tbData}/>
        </div>
      </div>
    );
  }
}