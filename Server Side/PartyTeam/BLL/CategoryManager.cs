using DAL;
using DAL.Actions;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class CategoryManager
    {
        public static List<categoryDTO> GetCategory()
        {
            List<category> list = Category.Get();
            return categoryDTO.CreateDTOList(list);
        }
        public static List<categoryDTO> GetCategoryById(int id)
        {
            List<category> list = Category.Get();
            List<category> category = list.Where(c => c.Id == id).ToList();
            List<categoryDTO> categoryDTOs = categoryDTO.CreateDTOList(category);
            return categoryDTOs;
        }
    
        public static void PostCategory(category c)
        {
            category newC = Category.Post(c);
        }
        public static void PutCategory(category c)
        {
            Category.Put(c);
        }
        public static void DeleteCategoryById(int i)
        {
            Category.Delete(i);
        }
    }
}