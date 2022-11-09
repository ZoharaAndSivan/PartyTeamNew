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
    public class CelebrationManager
    {
        public static List<celebrationDTO> GetCelebration()
        {
            List<celebration> list = Celebration.Get();
            return celebrationDTO.CreateDTOList(list);
        }
        public static List<celebrationDTO> GetCelebrationById(int id)
        {
            List<celebration> list = Celebration.Get();
            List<celebration> celebrations = list.Where(c => c.Id == id).ToList();
            List<celebrationDTO> celebrationDTOs = celebrationDTO.CreateDTOList(celebrations);
            return celebrationDTOs;
        }
        public static void PostCelebration(celebration c)
        {
            Celebration.Post(c);            
        }
        public static void PutCelebration(celebration c)
        {
            Celebration.Put(c);
        }
        public static void Delete(int i)
        {
            Celebration.Delete(i);
        }
    }
}