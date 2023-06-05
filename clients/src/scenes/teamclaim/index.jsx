import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RowDetails from '../../components/RowDetailsClaim'
import { GetProfiles } from '../../redux/actions/profileActions'
import { GetReclamations } from '../../redux/actions/reclamationActions'
import RowDetailsClaim from '../../components/RowDetailsClaim'

function TeamClaim() {
  
  const reclamations = useSelector(state => state.reclamations)
  const dispatch  = useDispatch()
  useEffect(() => {
    (async () => {
      await dispatch(GetReclamations());
    })();
  }, [dispatch]);
  return (
    
     
      <div class="container p-4 mt-4">
        <div class="row justify-content-evenly mt-4">
           
           <div class="col-lg-12 col-md-12 mt-4">
               <div class="d-flex">
                <i class="fa-solid fa-user fs-1 mx-2"></i> <h2>Resignations list</h2>
               </div>
               <div class="shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">role</th>
                        <th scope="col">date</th>
                        <th scope="col">reason</th>
                        <th scope="col">actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        reclamations.reclamations.map(({_id, user, type, description})=>(
                           <RowDetailsClaim _id={_id} user={user} type={type} description={description}   />
                        ))
                      }
                      
                    </tbody>
                  </table>
            </div>
           </div>
       </div>
   </div>
   
  )
}

export default TeamClaim