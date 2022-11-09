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
    public class CategoryController : ApiController
    {
        //עובדדדדדד
        // GET: api/Category
        public List<categoryDTO> Get(){ return CategoryManager.GetCategory(); }

        //עובדדדדדד
        // GET: api/Category/5
        public List<categoryDTO> GetCategoryById(int id) { return CategoryManager.GetCategoryById(id); }
        
        //עובדדדדדד
        // POST: api/Category
        public void Post([FromBody]category value) { CategoryManager.PostCategory(value); }
        
        //לנסות
        // PUT: api/Category/5
        public void Put([FromBody]category value){ CategoryManager.PutCategory(value); }                
        
        //עובדדדדדד
        // DELETE: api/Category/Delete/5
        public void Delete(int id){ CategoryManager.DeleteCategoryById(id); }                
    }
}
