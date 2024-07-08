import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCircle2, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Streamline Your Workflow with TaskMaster</h1>
              <p className="text-xl mb-8">Boost productivity and collaboration with our intuitive task management platform.</p>
              <div className="space-x-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">Try for Free</Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">Learn More</Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/placeholder.svg" alt="TaskMaster Dashboard" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-purple-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Carousel Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <Carousel className="max-w-xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex flex-col items-center text-center pt-6">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4" />
                      <p className="mb-4 italic">"{testimonial.quote}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="mb-4 md:mb-0">
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-purple-400">Contact</a></li>
              </ul>
            </nav>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-purple-400"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-purple-400"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p>&copy; 2024 TaskMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: <Star className="h-8 w-8 text-purple-600" />,
    title: "Intuitive Interface",
    description: "User-friendly design for seamless task management and team collaboration."
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-purple-600" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights into team productivity and project progress."
  },
  {
    icon: <Star className="h-8 w-8 text-purple-600" />,
    title: "Seamless Integration",
    description: "Connect with your favorite tools and platforms for a unified workflow."
  }
];

const testimonials = [
  {
    quote: "TaskMaster has revolutionized our team's productivity. It's intuitive, powerful, and incredibly efficient.",
    name: "Jane Doe",
    title: "Project Manager, Tech Innovators",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "The analytics feature in TaskMaster has given us invaluable insights into our project timelines and team performance.",
    name: "John Smith",
    title: "CTO, Future Systems",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "TaskMaster's integration capabilities have streamlined our entire workflow. It's a game-changer for cross-team collaboration.",
    name: "Emily Chen",
    title: "Operations Director, Innovate Co",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

export default Index;