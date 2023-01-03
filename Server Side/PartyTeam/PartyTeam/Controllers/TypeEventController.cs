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
    public class TypeEventController : ApiController
    {
        //עובדדדדדד
        // GET: api/TypeEvent
        public List<typeeventDTO> Get() { return TypeEventManager.GetTypes(); }

        //עובדדדדדד
        // GET: api/TypeEvent/5
        public List<typeeventDTO> GetTypeEventManagerByEventId(int id) { return TypeEventManager.GetTypeEventById(id); }
        public List<typeeventDTO> GetTypesByCategoryId(int id) { return TypeEventManager.GetTypesByCategoryId(id); }

        //עובדדד
        // POST: api/TypeEvent
        public void Post([FromBody] typeevent value) { TypeEventManager.PostType(value); }

        //עובד
        // PUT: api/TypeEvent/5
        public void Put([FromBody] typeevent value) { TypeEventManager.PutTE(value); }

        // עובד
        // DELETE: api/TypeEvent/5
        public void Delete(int id) { TypeEventManager.Delete(id); }
    }
}
