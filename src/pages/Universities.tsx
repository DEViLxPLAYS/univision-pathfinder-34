import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Star, Users, DollarSign, Filter } from "lucide-react";

const Universities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const universities = [
    {
      id: 1,
      name: "Harvard University",
      location: "Cambridge, MA, USA",
      country: "USA",
      type: "Private",
      ranking: 1,
      students: "23,000+",
      tuition: "$54,000/year",
      image: "🏛️",
      description: "World's leading research university with excellence in all fields.",
      programs: 150,
      acceptanceRate: "3%"
    },
    {
      id: 2,
      name: "University of Oxford",
      location: "Oxford, UK",
      country: "UK",
      type: "Public",
      ranking: 2,
      students: "24,000+",
      tuition: "£28,000/year",
      image: "🏰",
      description: "One of the oldest and most prestigious universities in the world.",
      programs: 120,
      acceptanceRate: "17%"
    },
    {
      id: 3,
      name: "University of Toronto",
      location: "Toronto, ON, Canada",
      country: "Canada",
      type: "Public",
      ranking: 18,
      students: "97,000+",
      tuition: "CAD $58,000/year",
      image: "🍁",
      description: "Top-ranked Canadian university with diverse academic programs.",
      programs: 200,
      acceptanceRate: "43%"
    },
    {
      id: 4,
      name: "University of Melbourne",
      location: "Melbourne, VIC, Australia",
      country: "Australia",
      type: "Public",
      ranking: 33,
      students: "50,000+",
      tuition: "AUD $45,000/year",
      image: "🐨",
      description: "Australia's leading university with strong research focus.",
      programs: 180,
      acceptanceRate: "70%"
    },
    {
      id: 5,
      name: "Technical University of Munich",
      location: "Munich, Germany",
      country: "Germany",
      type: "Public",
      ranking: 50,
      students: "45,000+",
      tuition: "€350/semester",
      image: "🏢",
      description: "Leading technical university in Germany with innovation focus.",
      programs: 165,
      acceptanceRate: "8%"
    },
    {
      id: 6,
      name: "University of Amsterdam",
      location: "Amsterdam, Netherlands",
      country: "Netherlands",
      type: "Public",
      ranking: 58,
      students: "42,000+",
      tuition: "€14,000/year",
      image: "🌷",
      description: "Historic university with modern approach to education.",
      programs: 140,
      acceptanceRate: "25%"
    }
  ];

  const countries = ["all", "USA", "UK", "Canada", "Australia", "Germany", "Netherlands"];
  const types = ["all", "Public", "Private"];

  const filteredUniversities = universities.filter((uni) => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === "all" || uni.country === selectedCountry;
    const matchesType = selectedType === "all" || uni.type === selectedType;
    
    return matchesSearch && matchesCountry && matchesType;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Universities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover world-class universities from around the globe. Find the perfect institution for your academic journey.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search universities or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country === "all" ? "All Countries" : country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredUniversities.length} of {universities.length} universities
          </p>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            More Filters
          </Button>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((university) => (
            <Card key={university.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{university.image}</span>
                    <div>
                      <CardTitle className="text-lg">{university.name}</CardTitle>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{university.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">#{university.ranking}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {university.description}
                </CardDescription>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{university.students}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{university.tuition}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <Badge variant={university.type === "Private" ? "default" : "secondary"}>
                    {university.type}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {university.programs} Programs
                  </span>
                </div>

                <Button asChild className="w-full">
                  <Link to={`/university/${university.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No universities found matching your criteria.</p>
            <Button onClick={() => {
              setSearchTerm("");
              setSelectedCountry("all");
              setSelectedType("all");
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Universities;