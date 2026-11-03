# Architecture notes

The browser retrieves services and availability from Express. Express is authoritative for validation and conflicts, and persists normalized UTC appointment times in MongoDB. Appointment storage completes before notifications are attempted, so delivery failures do not remove accepted requests.

The current conflict query prevents ordinary overlap. For a horizontally scaled production deployment with truly simultaneous writes, add a transaction-backed lock or materialized resource-slot records with a unique compound index. This is called out explicitly rather than pretending a query followed by an insert is fully race-proof.
