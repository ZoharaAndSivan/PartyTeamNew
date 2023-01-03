using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class celebrationDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? PepoleAmount { get; set; }
        public System.DateTime? DateCelebration { get; set; }
        public System.TimeSpan? StartHour { get; set; }
        public string ImportantText { get; set; }
        public bool? EncodedCelebration { get; set; }
        public int CelebrationType { get; set; }
        public string Address { get; set; }
        public int EventManager { get; set; }

        public customerDTO managerDetails { get; set; }

        public celebrationDTO()
        {

        }
        public celebrationDTO(celebration ce)
        {
            Id = ce.Id;
            Name = ce.Name;
            PepoleAmount = ce.PepoleAmount;
            DateCelebration = ce.DateCelebration;
            StartHour = (TimeSpan)ce.StartHour;
            ImportantText = ce.ImportantText;
            EncodedCelebration = (bool)ce.EncodedCelebration;
            CelebrationType = (int)ce.CelebrationType;
            Address = ce.Address;
            EventManager = (int)ce.EventManager;
            managerDetails = new customerDTO(ce.customer);
        }
        public celebration FromDTOToTable()
        {
            celebration ce = new celebration();
            ce.Id = Id;
            ce.Name = Name;
            ce.PepoleAmount = PepoleAmount;
            ce.DateCelebration = DateCelebration;
            ce.StartHour = StartHour;
            ce.ImportantText = ImportantText;
            ce.EncodedCelebration = EncodedCelebration;
            ce.CelebrationType = CelebrationType;
            ce.Address = Address;
            ce.EventManager = EventManager;
            return ce;
        }
        public static List<celebrationDTO> CreateDTOList(List<celebration> list)
        {
            List<celebrationDTO> DTOList = new List<celebrationDTO>();
            return list.Select(ce => new celebrationDTO(ce)).ToList();
        }
    }
}
