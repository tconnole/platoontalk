-- CreateTable
CREATE TABLE "Roster" (
    "id" TEXT NOT NULL,
    "usergrp" INTEGER NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "rank" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address1" TEXT NOT NULL,
    "address2" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "postal" INTEGER NOT NULL,
    "phone" INTEGER NOT NULL,

    CONSTRAINT "Roster_pkey" PRIMARY KEY ("id")
);
