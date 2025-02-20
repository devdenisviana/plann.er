import { MapPin } from "lucide-react"

export function TripDetailsPage() {
    return (
        <div className="max-w-6x1 px-6 py-10 mx-auto">
            <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-beteween">
                <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-zinc-400" />
                    <span className="text-lg text-zic-100">Florianópolis, Brasil</span>
                </div>
            </div>
        </div>
    )
}