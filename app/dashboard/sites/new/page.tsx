import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function NewSite() {
  return (
    <div className="mx-auto flex w-full flex-1 flex-col justify-center xl:w-1/2">
      <Card>
        <CardHeader>
          <CardTitle>Create Site</CardTitle>
          <CardDescription>Create a new site to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div className="grid gap-2">
              <Label>Site Name</Label>
              <Input placeholder="Please enter a site name" />
            </div>
            <div className="grid gap-2">
              <Label>Subdirectory</Label>
              <Input placeholder="Please enter a subdirectory" />
            </div>
            <div className="grid gap-2">
              <Label>Description</Label>
              <Textarea placeholder="Please enter a site description" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
