import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Clock, DollarSign, GraduationCap, Calendar, Filter, BookOpen } from "lucide-react";

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedUniversity, setSelectedUniversity] = useState("all");

  const programs = [
    {
      id: 1,
      name: "Computer Science",
      level: "Bachelor",
      duration: "4 years",
      tuition: "$54,000/year",
      university: "Harvard University",
      universityId: 1,
      country: "USA",
      intakeMonths: ["September", "January"],
      description: "Comprehensive program covering algorithms, software engineering, AI, and machine learning.",
      requirements: "High School Diploma, SAT/ACT scores, TOEFL/IELTS",
      specializations: ["AI/ML", "Software Engineering", "Cybersecurity"]
    },
    {
      id: 2,
      name: "Business Administration",
      level: "Master",
      duration: "2 years",
      tuition: "$73,440/year",
      university: "Harvard University",
      universityId: 1,
      country: "USA",
      intakeMonths: ["September"],
      description: "MBA program focusing on leadership, strategy, and global business management.",
      requirements: "Bachelor's degree, GMAT/GRE, Work experience",
      specializations: ["Finance", "Marketing", "Operations", "Strategy"]
    },
    {
      id: 3,
      name: "Engineering",
      level: "Bachelor",
      duration: "4 years",
      tuition: "£28,000/year",
      university: "University of Oxford",
      universityId: 2,
      country: "UK",
      intakeMonths: ["October"],
      description: "World-class engineering program with focus on innovation and research.",
      requirements: "A-Levels, IELTS/TOEFL for international students",
      specializations: ["Mechanical", "Electrical", "Civil", "Chemical"]
    },
    {
      id: 4,
      name: "Data Science",
      level: "Master",
      duration: "2 years",
      tuition: "CAD $45,000/year",
      university: "University of Toronto",
      universityId: 3,
      country: "Canada",
      intakeMonths: ["September", "January"],
      description: "Advanced program in data analytics, machine learning, and statistical modeling.",
      requirements: "Bachelor's in related field, GRE scores, Programming experience",
      specializations: ["Machine Learning", "Big Data", "Statistics", "Analytics"]
    },
    {
      id: 5,
      name: "Medicine",
      level: "Doctorate",
      duration: "6 years",
      tuition: "AUD $70,000/year",
      university: "University of Melbourne",
      universityId: 4,
      country: "Australia",
      intakeMonths: ["February"],
      description: "Comprehensive medical program preparing students for medical practice.",
      requirements: "High ATAR score, UCAT, Interview, Prerequisites",
      specializations: ["General Practice", "Surgery", "Pediatrics", "Cardiology"]
    },
    {
      id: 6,
      name: "International Relations",
      level: "Bachelor",
      duration: "3 years",
      tuition: "€14,000/year",
      university: "University of Amsterdam",
      universityId: 6,
      country: "Netherlands",
      intakeMonths: ["September", "February"],
      description: "Study global politics, diplomacy, and international law.",
      requirements: "High School Diploma, English proficiency, Motivation letter",
      specializations: ["Diplomacy", "Global Economics", "Conflict Studies", "EU Studies"]
    },
    {
      id: 7,
      name: "Mechanical Engineering",
      level: "Master",
      duration: "2 years",
      tuition: "€1,500/year",
      university: "Technical University of Munich",
      universityId: 5,
      country: "Germany",
      intakeMonths: ["October", "April"],
      description: "Advanced engineering program with research focus and industry collaboration.",
      requirements: "Bachelor's in Engineering, German/English proficiency, Strong academics",
      specializations: ["Automotive", "Aerospace", "Robotics", "Energy Systems"]
    },
    {
      id: 8,
      name: "Psychology",
      level: "Bachelor",
      duration: "3 years",
      tuition: "£25,000/year",
      university: "University of Oxford",
      universityId: 2,
      country: "UK",
      intakeMonths: ["October"],
      description: "Comprehensive study of human behavior, cognition, and mental processes.",
      requirements: "A-Levels including Science, IELTS/TOEFL",
      specializations: ["Clinical", "Cognitive", "Social", "Developmental"]
    }
  ];

  const levels = ["all", "Bachelor", "Master", "Doctorate"];
  const durations = ["all", "2 years", "3 years", "4 years", "6 years"];
  const universities = ["all", ...new Set(programs.map(p => p.university))];

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "all" || program.level === selectedLevel;
    const matchesDuration = selectedDuration === "all" || program.duration === selectedDuration;
    const matchesUniversity = selectedUniversity === "all" || program.university === selectedUniversity;
    
    return matchesSearch && matchesLevel && matchesDuration && matchesUniversity;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Study Programs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of academic programs from world-renowned universities. Find the perfect program to launch your career.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search programs, universities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level === "all" ? "All Levels" : level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDuration} onValueChange={setSelectedDuration}>
              <SelectTrigger>
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                {durations.map((duration) => (
                  <SelectItem key={duration} value={duration}>
                    {duration === "all" ? "All Durations" : duration}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedUniversity} onValueChange={setSelectedUniversity}>
              <SelectTrigger>
                <SelectValue placeholder="University" />
              </SelectTrigger>
              <SelectContent>
                {universities.map((university) => (
                  <SelectItem key={university} value={university}>
                    {university === "all" ? "All Universities" : university}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredPrograms.length} of {programs.length} programs
          </p>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Advanced Filters
          </Button>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <Card key={program.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline">{program.level}</Badge>
                  <Badge variant="secondary">{program.country}</Badge>
                </div>
                <CardTitle className="text-xl">{program.name}</CardTitle>
                <CardDescription className="font-medium text-primary">
                  {program.university}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {program.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{program.tuition}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Intake: {program.intakeMonths.join(", ")}</span>
                </div>

                <div>
                  <h4 className="font-medium text-sm mb-2">Specializations:</h4>
                  <div className="flex flex-wrap gap-1">
                    {program.specializations.slice(0, 3).map((spec, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                    {program.specializations.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{program.specializations.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Button className="w-full" asChild>
                    <Link to={`/university/${program.universityId}`}>
                      <GraduationCap className="mr-2 h-4 w-4" />
                      View University
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/consultation">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No programs found matching your criteria.</p>
            <Button onClick={() => {
              setSearchTerm("");
              setSelectedLevel("all");
              setSelectedDuration("all");
              setSelectedUniversity("all");
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;