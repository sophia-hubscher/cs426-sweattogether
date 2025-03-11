import { useState } from 'react';
import NavBar from '../components/NavBar.tsx';
import ProfileCard from '../components/ProfileCard.tsx';
import FilterBar from '../components/FilterBar.tsx';
import { filterProfiles, sortProfiles, SortOption } from '../utils/ProfileUtils.ts';
import profileData from '../mockData/MockProfiles.ts';

function Explore() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>('name-az');
  const [filters, setFilters] = useState<any>({
    levels: [],
    genders: [],
    maxDistance: null,
    workoutTypes: [],
  });

  const toggleFilter = () => {
    setIsFilterOpen(() => !isFilterOpen);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(() => event.target.value as SortOption);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(() => newFilters);
  };

  // Use profile utils to filter and sort cards
  const filteredProfiles = filterProfiles(profileData, filters);
  const sortedProfiles = sortProfiles(filteredProfiles, sortOption);

  return (
    <>
      <NavBar />
      <button
        onClick={toggleFilter}
        className="md:hidden fixed bg-white top-7 right-4 px-2 py-1 rounded text-black"
      >
        {isFilterOpen ? '✖' : <span>&#9776;</span>}
      </button>

      <div className="flex">
        <FilterBar isFilterOpen={isFilterOpen} onFilterChange={handleFilterChange} />
        <div className='w-full'>
          <div className={`p-4 flex ${isFilterOpen ? 'hidden' : ''} md:block justify-start`}>
            <label htmlFor="sort" className="mr-2">Sort by:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className="border rounded"
            >
              <option value="name-az">Name (A-Z)</option>
              <option value="level-low-high">Level (Low to High)</option>
              <option value="level-high-low">Level (High to Low)</option>
            </select>
          </div>

          <div
            className="flex flex-wrap gap-8 p-4 justify-center transition-transform duration-300 max-w-full overflow-x-auto"
            onClick={() => isFilterOpen && toggleFilter()}
          >
            {sortedProfiles.length > 0 ? (
              sortedProfiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  id={profile.id}
                  image={profile.image}
                  name={profile.name}
                  age={profile.age}
                  gender={profile.gender}
                  location={profile.location}
                  level={profile.level}
                  workout_preferences={profile.workoutTypes}
                  bio={profile.bio}
                />
              ))
            ) : (
              <p>No profiles to display. Try adjusting your filters.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
