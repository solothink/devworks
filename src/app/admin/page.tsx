
"use client";

import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { MessageSquare, Briefcase, Mail } from "lucide-react";

export default function AdminPage() {
  const firestore = useFirestore();

  const requirementsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, "project_requirements"),
      orderBy("submissionDate", "desc")
    );
  }, [firestore]);

  const messagesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, "contact_messages"),
      orderBy("timestamp", "desc")
    );
  }, [firestore]);

  const { data: submissions, isLoading: leadsLoading, error: leadsError } = useCollection(requirementsQuery);
  const { data: messages, isLoading: messagesLoading, error: messagesError } = useCollection(messagesQuery);

  if (leadsError || messagesError) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-destructive">Access Denied</h1>
        <p className="text-muted-foreground mt-2">
          You don't have permission to view this page. Admin access is required.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold font-headline mb-8 flex items-center gap-3">
        Dashboard
      </h1>

      <Tabs defaultValue="leads" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
          <TabsTrigger value="leads" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            Project Quotes
          </TabsTrigger>
          <TabsTrigger value="messages" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Inquiries
          </TabsTrigger>
        </TabsList>

        <TabsContent value="leads">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Project Quotes
                {submissions && (
                  <Badge variant="secondary">{submissions.length} Total</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {leadsLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>
              ) : submissions && submissions.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Requirement</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((sub: any) => (
                      <TableRow key={sub.id}>
                        <TableCell className="whitespace-nowrap">
                          {sub.submissionDate ? format(new Date(sub.submissionDate), "PPP") : "N/A"}
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{sub.clientName}</div>
                          <div className="text-xs text-muted-foreground">{sub.clientEmail}</div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{sub.budgetRange}</Badge>
                        </TableCell>
                        <TableCell className="max-w-md">
                          <p className="line-clamp-2 text-sm">{sub.projectDescription}</p>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-10 text-muted-foreground">
                  No project quotes found.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                General Inquiries
                {messages && (
                  <Badge variant="secondary">{messages.length} Total</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {messagesLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>
              ) : messages && messages.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>From</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {messages.map((msg: any) => (
                      <TableRow key={msg.id}>
                        <TableCell className="whitespace-nowrap">
                          {msg.timestamp ? format(new Date(msg.timestamp), "PPP") : "N/A"}
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{msg.name}</div>
                          <div className="text-xs text-muted-foreground">{msg.email}</div>
                        </TableCell>
                        <TableCell className="max-w-md">
                          <p className="line-clamp-2 text-sm">{msg.message}</p>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-10 text-muted-foreground">
                  No inquiries found.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
