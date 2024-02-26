import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.css'
})
export class OrderItemComponent implements OnInit {
  orderId: string | undefined;
  itemId: string | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Accessing the child route parameter
    this.itemId = this.route.snapshot.paramMap.get('itemId')!;

    // Fetch order item details with this.orderId and this.itemId
    this.orderId = this.route.parent?.snapshot.paramMap.get('orderId')!;
  }
}
