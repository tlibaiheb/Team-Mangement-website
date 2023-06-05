import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetLeaves } from '../../redux/actions/congeActions'
import RowDetailsConge from '../../components/RowDetailsConges'

function TeamConge() {
  
  const leaves = useSelector(state => state.leaves)
  const dispatch  = useDispatch()
  useEffect(() => {
    (async () => {
      await dispatch(GetLeaves());
    })();
  }, [dispatch]);
  return (
    
     
      <div class="container p-4 mt-4">
        <div class="row justify-content-evenly mt-4">
           
           <div class="col-lg-12 col-md-12 mt-4">
               <div class="d-flex">
                <i class="fa-solid fa-user fs-1 mx-2"></i> <h2>Leave list</h2>
               </div>
               <div class="shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">role</th>
                        <th scope="col">startDate</th>
                        <th scope="col">endDate</th>
                        <th scope="col">reason</th>
                        <th scope="col">status</th>

                      </tr>
                    </thead>
                    <tbody>
                      {
                        leaves.reclamations.map(({_id, user, startDate, endDate, reason , status })=>(
                           <RowDetailsConge _id={_id} user={user} startDate={startDate} endDate={endDate} reason={reason} status={status}   />
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

export default TeamConge