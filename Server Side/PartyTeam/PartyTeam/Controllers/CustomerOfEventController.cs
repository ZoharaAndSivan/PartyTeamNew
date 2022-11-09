using BLL;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PartyTeam.Controllers
{
    public class CustomerOfEventController : ApiController
    {        
        //עובדדדדדד
        // GET: api/CostomerOfEvent
        public List<customerofeventDTO> Get() { return CustomerOfEventManager.GetCustomers(); }

        //עובדדדדדד
        // GET: api/CostomerOfEvent/GetCustomerOfEventByEventId/5
        public List<customerofeventDTO> GetCustomerOfEventByEventId(int id) { return CustomerOfEventManager.GetCustomerOfEventById(id); }

        public customer GetManagerOfEvent(int id) { return CustomerOfEventManager.GetManagerOfEvent(id); }

        //עובדדדדדד
        // POST: api/CostomerOfEvent
        public void Post([FromBody]customerofevent value) { CustomerOfEventManager.PostCustomerOfEvent(value); }

        //לנסות
        // PUT: api/CostomerOfEvent/5
        public void Put([FromBody]customerofevent value) { CustomerOfEventManager.PutCOE(value); }

        //עובדדדדדד
        // DELETE: api/CostomerOfEvent/5
        public void Delete(int id) { CustomerOfEventManager.Delete(id); }
    }
}