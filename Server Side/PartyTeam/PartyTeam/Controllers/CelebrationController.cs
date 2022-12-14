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

        // GET: api/Celebartion
        public List<celebrationDTO> GetNotApproval() { return CelebrationManager.GetCelebrationNotApproval(); }
        [HttpPost]
        public List<celebrationDTO> GetOrderCelebrationByUserEmail([FromBody] EmailBody body) { return CelebrationManager.GetOrderCelebrationByUserEmail(body.Email); }
        public List<celebrationDTO> GetMyCelebrationByUserId(int id) { return CelebrationManager.GetMyCelebrationByUserId(id); }

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

        //עובד
        // PUT: api/Celebartion/5
        public void Put([FromBody] celebration value) { CelebrationManager.PutCelebration(value); }
        [HttpPut]
        public celebration ChangeEventStatus([FromBody] celebration cel)
        {
            int id = cel.Id;
            bool answer = (bool)cel.EncodedCelebration;
            return CelebrationManager.ChangeEventStatus(id, answer);
        }

        //עובד
        // DELETE: api/Celebartion/5
        public void Delete(int id) { CelebrationManager.Delete(id); }
  
    }

    public class EmailBody
    {
        public string Email { get; set; }
    }
}
