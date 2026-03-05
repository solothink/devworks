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
import { format } from "date-fns";

export default function AdminPage() {
  const firestore = useFirestore();

  const requirementsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, "project_requirements"),
      orderBy("submissionDate", "desc")
    );
  }, [firestore]);

  const { data: submissions, isLoading, error } = useCollection(requirementsQuery);

  if (error) {
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Project Submissions
            {submissions && (
              <Badge variant="secondary">{submissions.length} Total</Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          ) : submissions && submissions.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.map((sub: any) => (
                  <TableRow key={sub.id}>
                    <TableCell className="whitespace-nowrap">
                      {sub.submissionDate ? format(new Date(sub.submissionDate), "PPP p") : "N/A"}
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{sub.clientName}</div>
                      <div className="text-xs text-muted-foreground">{sub.clientEmail}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{sub.budgetRange}</Badge>
                    </TableCell>
                    <TableCell className="max-w-md truncate">
                      {sub.projectDescription}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-10 text-muted-foreground">
              No submissions found yet.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
