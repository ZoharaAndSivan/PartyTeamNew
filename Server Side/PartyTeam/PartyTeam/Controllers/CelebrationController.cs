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
    public class CelebrationController : ApiController
    {
        //עובדדדדדד
        // GET: api/Celebartion
        public List<celebrationDTO> Get() { return CelebrationManager.GetCelebration(); }

        //לבדוק למה זה לא עובד
        // GET: api/Celebartion/5
        [HttpGet]
        public IHttpActionResult GetById(int i)
        {
            try
            {
                CelebrationManager.GetCelebrationById(i);
                return Ok();
            }
            catch
            {
                return BadRequest("bad");
            }
        }

        //עובדדדדדדדדדד
        // POST: api/Celebartion
        [HttpPost]
        public IHttpActionResult Post([FromBody] celebration value)
        {
            try
            {
                CelebrationManager.PostCelebration(value);
                return Ok();
            }
            catch
            {
                return BadRequest("לא הצלחנו להקים");
            }
        }

        //לנסות
        // PUT: api/Celebartion/5
        public void Put([FromBody] celebration value) { CelebrationManager.PutCelebration(value); }

        //לנסות
        // DELETE: api/Celebartion/5
        public void Delete(int id) { CelebrationManager.Delete(id); }
    }
}
