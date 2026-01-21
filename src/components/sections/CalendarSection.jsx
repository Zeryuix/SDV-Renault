
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';
import FieldVisitReservationModal from '@/components/modals/FieldVisitReservationModal';

function CalendarSection({ onVisitClick }) {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const trackEvent = (eventName) => {
    console.log(`Event tracked: ${eventName}`);
  };

  const calendarData = {
    paris: [
      {
        week: "Semaine 1",
        dates: "27-31 janvier 2026",
        departments: ["75", "77", "78", "91", "92", "93", "94", "95"]
      },
      {
        week: "Semaine 2",
        dates: "3-7 février 2026",
        departments: ["75", "77", "78", "91", "92", "93", "94", "95"]
      },
      {
        week: "Semaine 3",
        dates: "10-14 février 2026",
        departments: ["75", "77", "78", "91", "92", "93", "94", "95"]
      }
    ],
    montpellier: [
      {
        week: "Semaine 1",
        dates: "27-31 janvier 2026",
        departments: ["34", "30", "48", "66"]
      },
      {
        week: "Semaine 2",
        dates: "3-7 février 2026",
        departments: ["34", "30", "48", "66"]
      },
      {
        week: "Semaine 3",
        dates: "10-14 février 2026",
        departments: ["34", "30", "48", "66"]
      }
    ]
  };

  const allDepartments = useMemo(() => {
    const depts = new Set();
    Object.values(calendarData).forEach(team => {
      team.forEach(week => {
        week.departments.forEach(dept => depts.add(dept));
      });
    });
    return Array.from(depts).sort();
  }, []);

  const filteredResults = useMemo(() => {
    let results = [];
    
    if (selectedTeam === 'all' || selectedTeam === 'paris') {
      results = [...results, ...calendarData.paris.map(w => ({ ...w, team: 'Paris' }))];
    }
    if (selectedTeam === 'all' || selectedTeam === 'montpellier') {
      results = [...results, ...calendarData.montpellier.map(w => ({ ...w, team: 'Montpellier' }))];
    }

    if (selectedDepartment) {
      results = results.filter(week => 
        week.departments.includes(selectedDepartment)
      );
    }

    return results;
  }, [selectedTeam, selectedDepartment]);

  React.useEffect(() => {
    if (selectedDepartment || selectedTeam !== 'all') {
      trackEvent('filter_department');
    }
  }, [selectedDepartment, selectedTeam]);

  React.useEffect(() => {
    trackEvent('view_calendar');
  }, []);

  const handleReservationClick = () => {
    setIsReservationModalOpen(true);
  };

  return (
    <section id="calendar-section" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Calendrier des passages terrain
          </h2>
          <p className="text-xl text-slate-600">
            Trouvez les dates de passage dans votre région
          </p>
        </motion.div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Department Filter */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Département
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-[#0066B3] focus:border-transparent outline-none transition-all"
              >
                <option value="">Tous les départements</option>
                {allDepartments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            {/* Team Filter */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                <Users className="w-4 h-4 inline mr-2" />
                Équipe
              </label>
              <select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-[#0066B3] focus:border-transparent outline-none transition-all"
              >
                <option value="all">Toutes les équipes</option>
                <option value="paris">Paris</option>
                <option value="montpellier">Montpellier</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto">
          {filteredResults.length > 0 ? (
            <div className="space-y-6">
              {filteredResults.map((week, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-5 h-5 text-[#0066B3]" />
                        <h3 className="text-xl font-bold text-slate-900">
                          {week.week}
                        </h3>
                        <span className="px-3 py-1 bg-[#8DC73F]/10 text-[#0066B3] text-sm font-semibold rounded-full">
                          {week.team}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-3">{week.dates}</p>
                      <div className="flex flex-wrap gap-2">
                        {week.departments.map(dept => (
                          <span
                            key={dept}
                            className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-sm rounded-lg"
                          >
                            {dept}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button
                      onClick={handleReservationClick}
                      className="bg-gradient-to-r from-[#8DC73F] to-[#0066B3] hover:from-[#7AB62F] hover:to-[#005299] text-white font-bold rounded-xl"
                    >
                      Réserver un passage
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                Aucun passage prévu pour les critères sélectionnés
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Field Visit Reservation Modal */}
      <FieldVisitReservationModal 
        open={isReservationModalOpen} 
        onOpenChange={setIsReservationModalOpen} 
      />
    </section>
  );
}

export default CalendarSection;
