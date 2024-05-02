import Card from "@/components/card";
import Link from "next/link";
import React from "react";

const ArchivedNotifications = () => {
  return (
    <>
      <Card>
        Notifications <Link href="/complex-dashboard">default</Link>
      </Card>
    </>
  );
};

export default ArchivedNotifications;
