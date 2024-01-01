import SideNav from "@/app/ui/dashboard/sidenav";

// The `layout` is also a special file 
// It defines all the UI that is shared b/w all pages in a folder
// Outer `pages` automatically gets injected into the `layout` at compilation
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}
