import { gql } from '@apollo/client'

export const CREATE_MOVIE = gql`
    mutation createMovie($title: String, $description: String, $likes: Int, $image: String, $date: String){
        createMovie($title: String, $description: String, $likes: Int, $image: String, $date: String){
            _id
            title
            description
            likes
            image
            date
        }
    }
`

export const UPDATE_MOVIE = gql`
    mutation updateMovie($_id: ID,$title: String, $description: String, $likes: Int, $image: String, $date: String){
        updateMovie($_id: ID,$title: String, $description: String, $likes: Int, $image: String, $date: String){
            _id
            title
            description
            likes
            image
            date
        }
    }
`
export const REMOVE_MOVIE = gql`
mutation removeMovie($_id: ID){
  removeMovie(_id: $_id){
    _id
    title
    description
    likes
    image
    date
  }
}
`
