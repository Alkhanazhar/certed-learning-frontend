import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { Download } from "lucide-react";
import { handlePayment } from "@/hooks/handlePayment";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import FadeInSection from "@/hooks/fade-animation";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [mobile, setMobile] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  useEffect(() => {
    if (courseId) {
      const storedCourse = localStorage.getItem(courseId);
      if (storedCourse) {
        setCourseData(JSON.parse(storedCourse));
      }
    }
  }, [courseId]);

  if (!courseData) return <p className="text-white text-center">Loading...</p>;

  return (
    <FadeInSection>
      <div className="w-full px-4 md:px-10 py-24 bg-[#090040] text-gray-100">
        {/* Hero Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="flex flex-col space-y-6 md:w-1/2">
            <h1 className="text-4xl font-bold text-primary">
              {courseData.name} Training
            </h1>
            <p className="text-gray-300">
              Master the fundamentals and advanced techniques of{" "}
              {courseData.name.toLowerCase()} with our comprehensive training
              course.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?q=80&w=1302&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Training"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Main Section with Sidebar */}
        <div className="mt-10 w-full flex flex-col md:flex-row gap-10 items-start">
          {/* Main Content */}
          <div className="w-full md:w-2/3">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold">
                      Course Description
                    </h2>
                    <p className="mt-2 text-sm text-gray-300">
                      Learn to analyze and interpret complex data, use tools
                      like Excel, SQL, and Python, and transform insights into
                      actionable strategies. Whether you're a beginner or
                      enhancing your skills, this course equips you to thrive in
                      a data-driven world.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">
                      What You'll Learn From This Course
                    </h2>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-gray-300">
                      <li>
                        Understand the basics of data analytics and its role in
                        business decisions.
                      </li>
                      <li>
                        Clean, organize, and prepare data using Excel, Python,
                        and SQL.
                      </li>
                      <li>
                        Visualize data using tools like Power BI and Tableau.
                      </li>
                      <li>
                        Apply statistical methods to analyze data effectively.
                      </li>
                      <li>
                        Use Python and R for machine learning and predictive
                        modeling.
                      </li>
                      <li>Translate insights into business strategies.</li>
                      <li>Query and manage databases using SQL.</li>
                      <li>
                        Gain hands-on experience through real-world projects.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">Certification</h2>
                    <p className="mt-2 text-sm text-gray-300">
                      Upon successful completion, you’ll receive a certificate
                      demonstrating your proficiency in analytics skills like
                      data cleaning, visualization, and modeling. This can boost
                      your career opportunities in the competitive analytics
                      field.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="curriculum">
                <p className="mt-4 text-gray-300">
                  Curriculum details coming soon...
                </p>
              </TabsContent>
              <TabsContent value="reviews">
                <p className="mt-4 text-gray-300">No reviews yet.</p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <Card className="w-full md:w-1/3 shadow-lg">
            <CardContent className="space-y-4 py-6">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/006/425/314/small_2x/modern-university-certificate-template-free-vector.jpg"
                alt="Certificate"
                className="rounded-md border"
              />
              <div className="space-y-1 text-sm text-gray-700 dark:text-neutral-800">
                <p>
                  <strong>Duration:</strong> {courseData.duration} Months
                </p>
                <p>
                  <strong>Lectures:</strong> {courseData.chapters * 5}
                </p>
                <p>
                  <strong>Skill Level:</strong> Intermediate
                </p>
                <p>
                  <strong>Language:</strong> English/Hindi
                </p>
                <p>
                  <strong>Quizzes:</strong> {courseData.chapters * 2}
                </p>
                <p>
                  <strong>Certificate:</strong> Yes
                </p>
                <p>
                  <strong>Pass Percentage:</strong> 90%
                </p>
              </div>
              <a
                href={courseData.pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4!"
              >
                <Button variant="outline" className="w-full gap-2 text-sm">
                  <Download className="h-4 w-4" /> Download Course Content
                </Button>
              </a>
              <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full text-sm mt-4"
                    onClick={() => setOpenDialog(true)}
                  >
                    ₹{courseData.amount.toLocaleString()} INR
                  </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Enter Mobile Number</DialogTitle>
                  </DialogHeader>

                  <div className="py-2">
                    <Input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      maxLength={10}
                      className="text-sm"
                    />
                  </div>

                  <DialogFooter>
                    <Button
                      onClick={() => {
                        if (mobile.length === 10) {
                          handlePayment(courseData, mobile);
                          setOpenDialog(false);
                        } else {
                          alert("Please enter a valid 10-digit mobile number.");
                        }
                      }}
                    >
                      Proceed to Pay
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button className="w-full text-sm">Enroll Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </FadeInSection>
  );
};

export default CourseDetail;
