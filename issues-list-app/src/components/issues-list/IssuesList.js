import React from 'react'
import { Container } from 'reactstrap'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import '../../assets/scss/IssuesList.scss'

const GET_ISSUES_COUNT = gql`
  query($owner: String!, $name: String!) {
    openIssues: repository(owner: $owner, name: $name) {
      issues(states: OPEN) {
        totalCount
      }
    }
    closedIssues: repository(owner: $owner, name: $name) {
      issues(states: CLOSED) {
        totalCount
      }
    }
  }
`

const GET_ISSUES = gql`
  query($owner: String!, $name: String!, $first: Int, $last: Int, $beforeCursor: String, $afterCursor: String) {
    repository(owner: $owner, name: $name) {
      issues(first: $first, last: $last, before: $beforeCursor, after: $afterCursor, orderBy: {field: CREATED_AT, direction: DESC}, states: OPEN) {
        edges {
          node {
            id
            number
            title
            createdAt
            comments {
              totalCount
            }
            author {
              login
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
        }
      }
    }
  }
`


export default class IssuesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      owner: '',
      repo: '',
      ownerInput: '',
      repoInput: ''
    }
  }

  handleOwnerChange = (e) => {
    e.preventDefault()
    this.setState({ ownerInput: e.target.value })
  }

  handleRepoChange = (e) => {
    e.preventDefault()
    this.setState({ repoInput: e.target.value })
  }

  render() {
    return (
      <Container className="container my-4">
        <h1>Issues</h1>
        <form className="search-form form-inline">
          <div className="search-owner-group form-group pr-1">
            <input
              className="input"
              type="text"
              name="owner"
              value={this.state.ownerInput}
              onChange={this.handleOwnerChange}
              placeholder="owner"
            />
          </div>
          <div className="search-repo-group form-group px-1">
            <input
              className="input"
              type="text"
              name="repo"
              value={this.state.repoInput}
              onChange={this.handleRepoChange}
              placeholder="repository"
            />
          </div>
          <div className="button-group form-group pl-1">
            <button
              type="submit"
              className="btn btn-sm"
              onClick={this.handleSubmit}
            >
              Search
            </button>
          </div>
        </form>
        <Query
          query={GET_ISSUES_COUNT}
          variables={{ owner: this.state.owner, name: this.state.repo, first: 20 }}
          fetch-policy="cache-and-network"
        >
          {({ loading, error, data }) => {
            if (loading) {

            }
            if (error) {

            }
          }}
        </Query>
      </Container>
    )
  }
}
