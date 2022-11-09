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
        public List<typeeventDTO> Get() { return TypeEventManager.Gettypes(); }

        //עובדדדדדד
        // GET: api/TypeEvent/5
        public List<typeeventDTO> GetTypeEventManagerByEventId(int id) { return TypeEventManager.GetTypeEventById(id); }

        //לא עובדדד
        // POST: api/TypeEvent
        public void Post([FromBody]typeevent value) { TypeEventManager.PostType(value); }

        //לנסותתת
        // PUT: api/TypeEvent/5
        public void Put([FromBody]typeevent value) { TypeEventManager.PutTE(value); }

        // לנסות אחרי שההוספה תעבוד
        // DELETE: api/TypeEvent/5
        public void Delete(int id) { TypeEventManager.Delete(id); }
    }
}
