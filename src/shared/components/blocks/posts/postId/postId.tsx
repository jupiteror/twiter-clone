import {
  Card,
  CardTitle,
  CardContent,
  CardFooter,
  CardHeader,
  CardAction,
  CardDescription,
} from "@/src/shared/ui/card";
import FooterCard from "./components/FooterCard";
import { Settings } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import HeaderCard from "./components/HeaderCard";

const PostId = () => {
  return (
    <div className="w-full border-b">
      <Card>
        <CardHeader>
          <HeaderCard />
        </CardHeader>
        <CardContent className="flex justify-center ">
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </CardContent>
        {/* <CardAction className="">@username</CardAction> */}
        <CardContent className="">
          <div className="border w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
              className="w-full h-full object-cover"
              alt="not found"
            />
          </div>
          <CardDescription className="px-4 pt-2">
            But Lorem Ipsim
          </CardDescription>
        </CardContent>
        <CardFooter>
          <FooterCard />
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostId;
