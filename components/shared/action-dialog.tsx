import type { RotateCcw, Trash } from "lucide-react";


import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "../ui/alert-dialog";
import { cn } from "@/lib/utils";

type ActionDialogProps = {
	actionLabel: string;
	action: () => void;
	description: string;
	title: string;
	Icon: typeof Trash | typeof RotateCcw;
	children: React.ReactNode;
	disabled?: boolean;
	additionalContent?: React.ReactNode;
	variant?: "destructive" | "positive" | "warning";
};
const ActionDialog = ({
	actionLabel,
	action,
	description,
	title,
	Icon,
	children,
	variant = "destructive",
	additionalContent,
	disabled,
}: ActionDialogProps) => (
	<AlertDialog>
		<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
		<AlertDialogContent onClick={(e) => e.stopPropagation()}>
			<AlertDialogHeader>
				<AlertDialogTitle className="sr-only">{title}</AlertDialogTitle>
				<div>
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2">
							<div
								className={cn(
									"flex size-10 items-center justify-center rounded-full bg-red-100",
									variant === "positive" && "bg-green-100",
									variant === "warning" && "bg-orange-100",
								)}
							>
								<div
									className={cn(
										"flex size-8 items-center justify-center rounded-full bg-red-200",
										variant === "positive" && "bg-green-200",
										variant === "warning" && "bg-orange-200",
									)}
								>
									<Icon
										className={cn(
											"size-5 text-red-500",
											variant === "positive" && "text-green-500",
											variant === "warning" && "text-orange-500",
										)}
									/>
								</div>
							</div>
							<h2 className="font-semibold text-black text-lg">{title}</h2>
						</div>
						<p className="text-gray-500 text-sm">{description}</p>
						{additionalContent}
					</div>
				</div>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel>Cancel</AlertDialogCancel>
				<AlertDialogAction
					className={cn(
						variant === "positive" && "bg-green-500 hover:bg-green-600",
						variant === "warning" && "bg-orange-500 hover:bg-orange-600",
					)}
					disabled={disabled}
					onClick={() => action()}
				>
					{actionLabel}
				</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>
);

export default ActionDialog;
