import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Star, Users, DollarSign, Calendar, GraduationCap, Award, Clock, BookOpen, ArrowLeft } from "lucide-react";

const UniversityDetail = () => {
  const { id } = useParams();
  
  // Mock data - in real app, fetch from API based on id
  const university = {
    id: parseInt(id || "1"),
    name: "Harvard University",
    location: "Cambridge, MA, USA",
    country: "USA",
    type: "Private",
    ranking: 1,
    students: "23,000+",
    tuition: "$54,000/year",
    image: "🏛️",
    description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636, Harvard is the oldest institution of higher education in the United States and one of the most prestigious universities worldwide.",
    accreditation: "New England Commission of Higher Education (NECHE)",
    establishedYear: 1636,
    campusSize: "209 acres",
    acceptanceRate: "3%",
    programs: [
      {
        id: 1,
        name: "Computer Science",
        level: "Bachelor",
        duration: "4 years",
        tuition: "$54,000/year",
        intakeMonths: ["September", "January"],
        requirements: "High School Diploma, SAT/ACT scores, TOEFL/IELTS for international students"
      },
      {
        id: 2,
        name: "Business Administration",
        level: "Master",
        duration: "2 years", 
        tuition: "$73,440/year",
        intakeMonths: ["September"],
        requirements: "Bachelor's degree, GMAT/GRE scores, Work experience preferred"
      },
      {
        id: 3,
        name: "Medicine",
        level: "Doctorate",
        duration: "4 years",
        tuition: "$65,203/year",
        intakeMonths: ["August"],
        requirements: "Bachelor's degree, MCAT scores, Pre-med coursework"
      }
    ],
    feeStructure: {
      tuition: "$54,000",
      accommodation: "$18,000",
      meals: "$7,025",
      books: "$1,000",
      personal: "$3,500",
      total: "$83,525"
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container px-4">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/universities">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Universities
          </Link>
        </Button>

        {/* University Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <span className="text-6xl">{university.image}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">{university.name}</CardTitle>
                        <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                          <MapPin className="h-5 w-5" />
                          <span>{university.location}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        #{university.ranking}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{university.students}</div>
                        <div className="text-sm text-muted-foreground">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{university.establishedYear}</div>
                        <div className="text-sm text-muted-foreground">Established</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{university.campusSize}</div>
                        <div className="text-sm text-muted-foreground">Campus</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{university.acceptanceRate}</div>
                        <div className="text-sm text-muted-foreground">Acceptance</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Badge variant={university.type === "Private" ? "default" : "secondary"}>
                        {university.type}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Award className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{university.accreditation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {university.description}
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Take Action</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="lg" asChild>
                  <Link to="/consultation">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Book Consultation
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Apply Now
                </Button>
                <Button variant="ghost" className="w-full">
                  Download Brochure
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Tuition Fee</span>
                  <span className="font-semibold">{university.tuition}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Programs</span>
                  <span className="font-semibold">{university.programs.length}+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-semibold">{university.type}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Programs Section */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span>Available Programs</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {university.programs.map((program) => (
                <Card key={program.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{program.name}</CardTitle>
                    <Badge variant="outline">{program.level}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{program.tuition}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{program.intakeMonths.join(", ")}</span>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm mb-2">Requirements:</h4>
                      <p className="text-xs text-muted-foreground">{program.requirements}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fee Structure */}
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="h-6 w-6 text-primary" />
              <span>Annual Fee Structure</span>
            </CardTitle>
            <CardDescription>
              Estimated costs for one academic year (subject to change)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Tuition Fee</span>
                  <span className="font-semibold">{university.feeStructure.tuition}</span>
                </div>
                <div className="flex justify-between">
                  <span>Accommodation</span>
                  <span className="font-semibold">{university.feeStructure.accommodation}</span>
                </div>
                <div className="flex justify-between">
                  <span>Meals</span>
                  <span className="font-semibold">{university.feeStructure.meals}</span>
                </div>
                <div className="flex justify-between">
                  <span>Books & Supplies</span>
                  <span className="font-semibold">{university.feeStructure.books}</span>
                </div>
                <div className="flex justify-between">
                  <span>Personal Expenses</span>
                  <span className="font-semibold">{university.feeStructure.personal}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Annual Cost</span>
                  <span className="text-primary">{university.feeStructure.total}</span>
                </div>
              </div>
              
              <div className="bg-accent/5 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Financial Aid Available</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Merit-based scholarships</li>
                  <li>• Need-based financial aid</li>
                  <li>• Work-study programs</li>
                  <li>• External scholarships</li>
                  <li>• Payment plans available</li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Learn About Financial Aid
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UniversityDetail;